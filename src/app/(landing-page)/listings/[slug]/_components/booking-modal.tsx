"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { X, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CenterItem } from "../../_components/data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: CenterItem;
  selectedService: string;
}

export function BookingModal({ isOpen, onClose, details, selectedService }: BookingModalProps) {
  // Generate next 7 days dynamically
  const next7Days = useMemo(() => {
    const days = [];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push({
        dayName: weekdays[d.getDay()],
        dateNum: d.getDate(),
        monthName: months[d.getMonth()],
        fullString: `${weekdays[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} 2026`
      });
    }
    return days;
  }, []);

  // Form states managed locally
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("Morning (08:00 AM - 12:00 PM)");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [isSubmittingBooking, setIsSubmittingBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Initialize booking states when modal opens
  React.useEffect(() => {
    if (isOpen && next7Days.length > 0) {
      setBookingDate(next7Days[0].fullString);
      setBookingTime("Morning (08:00 AM - 12:00 PM)");
      setPatientName("");
      setPatientPhone("");
      setBookingSuccess(false);
      setIsSubmittingBooking(false);
      setBookingRef("");
    }
  }, [isOpen, next7Days]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    setIsSubmittingBooking(true);
    
    setTimeout(() => {
      setIsSubmittingBooking(false);
      setBookingSuccess(true);
      const ref = `STD-${Math.floor(100000 + Math.random() * 900000)}-${details.doctor.avatar}`;
      setBookingRef(ref);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-card border border-border rounded-[28px] w-full max-w-lg relative overflow-hidden transition-all my-8">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-black text-foreground">Schedule Confidential Booking</h3>
            <span className="text-[11px] text-muted-foreground font-semibold mt-0.5 block">{details.name}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-muted border border-border flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="size-4 text-muted-foreground" />
          </button>
        </div>

        {/* Modal Body */}
        {bookingSuccess ? (
          /* Success View */
          <div className="p-8 text-center flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
              <CheckCircle2 className="size-10 text-emerald-500" />
            </div>
            <div>
              <h4 className="text-lg font-black text-foreground">Appointment Booked Successfully!</h4>
              <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
                Your appointment has been registered in our system. A verification call will be made shortly.
              </p>
            </div>

            {/* Booking receipt details */}
            <div className="w-full bg-muted/40 border border-border/85 rounded-2xl p-4 text-left flex flex-col gap-2 mt-2 text-xs font-semibold">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reference ID:</span>
                <span className="text-foreground font-black">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Clinic/Lab:</span>
                <span className="text-foreground">{details.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Test Selected:</span>
                <span className="text-foreground truncate max-w-[200px]">{selectedService.split(" (")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Selected Slot:</span>
                <span className="text-foreground">{bookingDate} • {bookingTime.split(" (")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Patient:</span>
                <span className="text-foreground">{patientName}</span>
              </div>
            </div>

            <Button
              onClick={onClose}
              className="mt-4 w-full py-5 rounded-xl font-bold text-xs uppercase cursor-pointer"
              style={{ backgroundColor: details.accentBtn }}
            >
              Close & Done
            </Button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleBookingSubmit} className="p-6 flex flex-col gap-5">
            
            {/* 1. Selected service info */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Test/Service Package</label>
              <div className="p-3 bg-muted/30 border border-border/80 rounded-xl text-xs font-extrabold text-foreground truncate">
                {selectedService}
              </div>
            </div>

            {/* 2. Horizontal Date Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Choose Appointment Date</label>
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {next7Days.map((day, idx) => {
                  const isSelected = bookingDate === day.fullString;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setBookingDate(day.fullString)}
                      className={`shrink-0 flex flex-col items-center justify-center p-2.5 rounded-xl border w-16 text-center cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary scale-105"
                          : "bg-background border-border text-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase block leading-none">{day.dayName}</span>
                      <span className="text-base font-black block mt-1 leading-none">{day.dateNum}</span>
                      <span className="text-[8px] font-extrabold block mt-0.5 leading-none uppercase text-muted-foreground/80 group-hover:text-foreground">{day.monthName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Slot Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Choose Timing Slot</label>
              <select
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                required
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer"
              >
                <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
              </select>
            </div>

            {/* 4. Patient Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Patient Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="bg-background border border-border rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="e.g. +91 9876543210"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="bg-background border border-border rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            {/* Modal Footer actions */}
            <div className="border-t border-border pt-4 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1">
                <ShieldCheck className="size-3.5 text-emerald-500" />
                Strict confidentiality details guaranteed
              </span>
              
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmittingBooking}
                  className="px-6 py-2 text-xs font-bold rounded-xl cursor-pointer min-w-[120px]"
                  style={{ backgroundColor: details.accentBtn }}
                >
                  {isSubmittingBooking ? "Scheduling..." : "Schedule Now"}
                </Button>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
