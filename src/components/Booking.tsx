import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, isSameDay } from "date-fns";
import { CalendarIcon, Clock, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Valid phone number required."),
  service: z.string().min(1, "Please select a service."),
  date: z.date({ required_error: "A date of appointment is required." }),
  time: z.string().min(1, "Please select a time slot."),
  message: z.string().optional(),
});

const servicesList = [
  "Haircut & Styling",
  "Hair Spa",
  "Hair Coloring",
  "Keratin Treatment",
  "Smoothening",
  "Beard Grooming",
  "Facial Treatments",
  "Makeup Services",
  "Bridal Makeup",
  "Manicure & Pedicure",
  "Skin Care Treatments",
];

const ALL_SLOTS = [
  "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "1:00 PM",  "1:30 PM",
  "2:00 PM",  "2:30 PM",
  "3:00 PM",  "3:30 PM",
  "4:00 PM",  "4:30 PM",
  "5:00 PM",  "5:30 PM",
  "6:00 PM",  "6:30 PM",
  "7:00 PM",  "7:30 PM",
];

// Simulated booked slots per date (using day-of-week patterns for realism)
function getBookedSlots(date: Date): string[] {
  const day = date.getDay(); // 0=Sun, 6=Sat
  const dateNum = date.getDate();
  // Weekends are busier
  const busyness = day === 0 || day === 6 ? 10 : 5;
  // Deterministic "random" based on date to keep consistent across renders
  return ALL_SLOTS.filter((_, i) => (i * 7 + dateNum * 3) % 17 < busyness);
}

export function Booking() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", service: "", message: "" },
  });

  const bookedSlots = selectedDate ? getBookedSlots(selectedDate) : [];
  const availableSlots = ALL_SLOTS.filter(s => !bookedSlots.includes(s));

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitted(true);
    toast({
      title: "Appointment Requested!",
      description: `We'll confirm your ${values.service} on ${format(values.date, "PPP")} at ${values.time}.`,
    });
    setTimeout(() => {
      form.reset();
      setSelectedDate(undefined);
      setSubmitted(false);
    }, 4000);
  }

  return (
    <section id="book" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4 font-sans">Reserve Your Visit</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Book an Appointment</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <div className="w-2 h-2 rotate-45 bg-gold"></div>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-card border border-white/5 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative corner lines */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/30 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/30 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/30 pointer-events-none"></div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <CheckCircle className="w-16 h-16 text-gold mb-6" />
              <h3 className="font-serif text-3xl text-foreground mb-3">Request Received</h3>
              <p className="text-muted-foreground font-sans text-sm max-w-sm">
                Our team will call you shortly to confirm your appointment. Thank you for choosing Bon Temps Salon.
              </p>
            </motion.div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground uppercase tracking-widest text-xs">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jane Doe"
                            className="bg-background border-white/10 focus-visible:ring-gold rounded-none"
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground uppercase tracking-widest text-xs">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            className="bg-background border-white/10 focus-visible:ring-gold rounded-none"
                            data-testid="input-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Service */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground uppercase tracking-widest text-xs">Service</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger
                            className="bg-background border-white/10 focus:ring-gold rounded-none"
                            data-testid="select-service"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-white/10 text-foreground">
                          {servicesList.map(service => (
                            <SelectItem
                              key={service}
                              value={service}
                              className="focus:bg-white/5 focus:text-gold cursor-pointer"
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Date Picker */}
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-foreground uppercase tracking-widest text-xs mb-1">
                        Preferred Date
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              data-testid="button-date"
                              className={cn(
                                "pl-3 text-left font-normal bg-background border-white/10 hover:bg-white/5 hover:text-foreground rounded-none",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "EEEE, MMMM d, yyyy") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-card border-white/10" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setSelectedDate(date);
                              form.setValue("time", ""); // reset slot when date changes
                            }}
                            disabled={(date) => date < new Date() || date.getDay() === 0 /* closed Sunday */}
                            initialFocus
                            className="bg-card text-foreground"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Time Slots */}
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground uppercase tracking-widest text-xs flex items-center gap-2">
                        <Clock className="w-3 h-3 text-gold" />
                        Available Time Slots
                        {selectedDate && (
                          <span className="text-muted-foreground normal-case tracking-normal font-sans">
                            — {availableSlots.length} slots open
                          </span>
                        )}
                      </FormLabel>

                      {!selectedDate ? (
                        <div className="border border-white/5 bg-background/50 p-4 text-center text-muted-foreground text-sm font-sans">
                          Select a date above to see available slots
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-2">
                          {ALL_SLOTS.map(slot => {
                            const isBooked = bookedSlots.includes(slot);
                            const isSelected = field.value === slot;
                            return (
                              <button
                                key={slot}
                                type="button"
                                disabled={isBooked}
                                data-testid={`slot-${slot.replace(/\s|:/g, "-")}`}
                                onClick={() => !isBooked && field.onChange(slot)}
                                className={cn(
                                  "px-2 py-2 text-xs font-sans tracking-wide border transition-all duration-200",
                                  isBooked
                                    ? "border-white/5 text-white/20 bg-white/5 cursor-not-allowed line-through"
                                    : isSelected
                                      ? "border-gold bg-gold text-[#111] font-semibold"
                                      : "border-white/10 text-foreground hover:border-gold/50 hover:text-gold cursor-pointer bg-background"
                                )}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Legend */}
                      {selectedDate && (
                        <div className="flex gap-4 mt-2">
                          <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-widest">
                            <span className="w-3 h-3 border border-gold bg-gold inline-block"></span> Selected
                          </span>
                          <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-widest">
                            <span className="w-3 h-3 border border-white/10 bg-background inline-block"></span> Available
                          </span>
                          <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-widest">
                            <span className="w-3 h-3 border border-white/5 bg-white/5 inline-block"></span> Booked
                          </span>
                        </div>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground uppercase tracking-widest text-xs">
                        Special Requests (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any details we should know before your visit?"
                          className="resize-none bg-background border-white/10 focus-visible:ring-gold rounded-none min-h-[100px]"
                          data-testid="textarea-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  data-testid="button-submit"
                  className="w-full bg-gold text-background hover:bg-white hover:text-background rounded-none py-6 uppercase tracking-widest transition-colors duration-300 font-sans"
                >
                  Request Appointment
                </Button>

                <p className="text-center text-muted-foreground text-xs font-sans">
                  Or call us directly at{" "}
                  <a href="tel:+919871843877" className="text-gold hover:underline">
                    +91 98718 43877
                  </a>
                </p>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
