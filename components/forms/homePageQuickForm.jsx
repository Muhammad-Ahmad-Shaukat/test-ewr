"use client";
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock, AlertCircle } from "lucide-react";

export default function HomePageQuickForm() {
    const [formData, setFormData] = useState({
        name: '',
        cellphone: '',
        date: null,
        time: null,
        pax: '',
        bags: '',
        pickup: '',
        dropoff: ''
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    // Effect to auto-clear errors after 2 seconds
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const timer = setTimeout(() => {
                setErrors({});
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Please fill out this field";
        if (!formData.cellphone.trim()) newErrors.cellphone = "Please fill out this field";
        if (!formData.date) newErrors.date = "Please select a date";
        if (!formData.time) newErrors.time = "Please select a time";
        if (!formData.pax || parseInt(formData.pax) < 1) newErrors.pax = "Please enter a valid number";
        if (!formData.bags || parseInt(formData.bags) < 0) newErrors.bags = "Please enter a valid number";
        if (!formData.pickup.trim()) newErrors.pickup = "Please fill out this field";
        if (!formData.dropoff.trim()) newErrors.dropoff = "Please fill out this field";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        // Clear error immediately on change if user starts fixing it
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: null }));
        }
    };

    const handleDateChange = (date) => {
        setFormData(prev => ({ ...prev, date }));
        if (errors.date) setErrors(prev => ({ ...prev, date: null }));
    };

    const handleTimeChange = (time) => {
        setFormData(prev => ({ ...prev, time }));
        if (errors.time) setErrors(prev => ({ ...prev, time: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setStatus('submitting');

        // Dummy API call simulation
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
    };

    const InputError = ({ message }) => (
        <div className={`flex items-center gap-1.5 mt-2 text-rose-500 text-xs font-semibold overflow-hidden transition-all duration-300 ${message ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{message}</span>
        </div>
    );

    if (status === 'success') {
        return (
            <div className="w-full max-w-6xl mx-auto bg-white/[0.64] backdrop-blur-md rounded-2xl shadow-xl px-8 py-12 mt-8 border border-white/20 text-center animate-fade-in">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                        <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>

                    <div className="max-w-2xl mx-auto text-gray-800 space-y-4 text-lg">
                        <p>
                            Thank you <span className="font-bold">{formData.name}</span>.
                        </p>
                        <p>
                            We have received your request for a pickup from <span className="font-bold">{formData.pickup}</span> to <span className="font-bold">{formData.dropoff}</span> on <span className="font-bold">{formData.date?.toLocaleDateString()}</span>.
                        </p>
                        <p className="font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
                            Someone from the dispatch will call you shortly.
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            setStatus('idle');
                            setFormData({
                                name: '',
                                cellphone: '',
                                date: null,
                                time: null,
                                pax: '',
                                bags: '',
                                pickup: '',
                                dropoff: ''
                            });
                            setErrors({});
                        }}
                        className="mt-10 px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 shadow-md font-semibold cursor-pointer"
                    >
                        Book Another Trip
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto bg-white/[0.64] backdrop-blur-md rounded-2xl shadow-xl px-8 pt-8 pb-12 mt-8 border border-white/20">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Book Your Ride Online</h2>

            <style jsx global>{`
                /* General Datepicker Overrides */
                .react-datepicker-wrapper {
                    width: 100%;
                }
                .react-datepicker-popper {
                    z-index: 50 !important;
                    padding-top: 10px;
                }
                .react-datepicker {
                    font-family: inherit;
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
                    background-color: #fff;
                    overflow: hidden;
                    width: 320px;
                }
                
                /* Header Styling */
                .react-datepicker__header {
                    background-color: #fff;
                    border-bottom: 1px solid #f0f0f0;
                    padding-top: 15px;
                    padding-bottom: 10px;
                }
                .react-datepicker__current-month {
                    font-weight: 700;
                    color: #1a1a1a;
                    font-size: 1rem;
                    margin-bottom: 5px;
                }
                .react-datepicker__day-name {
                    color: #888;
                    font-weight: 600;
                    width: 38px;
                }
                
                /* Day Styling */
                .react-datepicker__day {
                    width: 38px;
                    height: 38px;
                    line-height: 38px;
                    border-radius: 50%;
                    margin: 2px;
                    font-weight: 500;
                    transition: all 0.2s;
                }
                .react-datepicker__day:hover {
                    background-color: #f3f4f6;
                    border-radius: 50%;
                }
                .react-datepicker__day--selected, 
                .react-datepicker__day--keyboard-selected {
                    background-color: #171717 !important;
                    color: white !important;
                    font-weight: 700;
                    border-radius: 50% !important;
                }
                .react-datepicker__day--today {
                    color: #171717;
                    font-weight: 800;
                    border: 1px solid #e5e5e5;
                }
                .react-datepicker__triangle {
                    display: none;
                }
                
                /* Navigation Arrows */
                .react-datepicker__navigation {
                    top: 15px;
                }
                .react-datepicker__navigation-icon::before {
                    border-color: #171717;
                    border-width: 2px 2px 0 0;
                }

                /* TIME PICKER CUSTOMIZATION */
                .react-datepicker__time-container {
                    width: 100% !important;
                    border-left: none !important;
                }
                .react-datepicker__time-container .react-datepicker__time {
                    background: transparent;
                }
                .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
                    width: 100% !important;
                    border-radius: 12px;
                }
                .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
                    padding: 0;
                }
                .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
                    height: auto;
                    padding: 10px;
                    margin: 4px;
                    border-radius: 8px;
                    font-weight: 500;
                }
                .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
                    background-color: #f3f4f6;
                }
                .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
                    background-color: #171717 !important;
                    color: white !important;
                    font-weight: 700;
                }
            `}</style>

            <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Name */}
                <div className="flex flex-col relative">
                    <label htmlFor="name" className="text-sm font-bold text-gray-900 mb-1">Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all placeholder:text-gray-500 text-gray-900
                            ${errors.name ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-gray-400 focus:border-transparent'}`}
                    />
                    <InputError message={errors.name} />
                </div>

                {/* Cellphone */}
                <div className="flex flex-col relative">
                    <label htmlFor="cellphone" className="text-sm font-bold text-gray-900 mb-1">Cellphone <span className="text-red-500">*</span></label>
                    <input
                        type="tel"
                        id="cellphone"
                        value={formData.cellphone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all placeholder:text-gray-500 text-gray-900
                            ${errors.cellphone ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-gray-400 focus:border-transparent'}`}
                    />
                    <InputError message={errors.cellphone} />
                </div>

                {/* Pickup Date */}
                <div className="flex flex-col relative group">
                    <label htmlFor="date" className="text-sm font-bold text-gray-900 mb-1">Pickup Date <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            placeholderText="Select Date"
                            minDate={new Date()}
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all placeholder:text-gray-500 text-gray-900 pl-10 cursor-pointer
                                ${errors.date ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-gray-400 focus:border-transparent'}`}
                            dateFormat="MMMM d, yyyy"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                    <InputError message={errors.date} />
                </div>

                {/* Pickup Time */}
                <div className="flex flex-col relative group">
                    <label htmlFor="time" className="text-sm font-bold text-gray-900 mb-1">Pickup Time <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <DatePicker
                            selected={formData.time}
                            onChange={handleTimeChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            placeholderText="Select Time"
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all placeholder:text-gray-500 text-gray-900 pl-10 cursor-pointer
                                ${errors.time ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-gray-400 focus:border-transparent'}`}
                        />
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                    <InputError message={errors.time} />
                </div>

                {/* No of Pax */}
                <div className="flex flex-col relative">
                    <label htmlFor="pax" className="text-sm font-bold text-gray-900 mb-1">No of Pax <span className="text-red-500">*</span></label>
                    <input
                        type="number"
                        id="pax"
                        min="1"
                        value={formData.pax}
                        onChange={handleChange}
                        placeholder="0"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all placeholder:text-gray-500 text-gray-900
                            ${errors.pax ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-gray-400 focus:border-transparent'}`}
                    />
                    <InputError message={errors.pax} />
                </div>

                {/* No of Bags */}
                <div className="flex flex-col relative">
                    <label htmlFor="bags" className="text-sm font-bold text-gray-900 mb-1">No of Bags <span className="text-red-500">*</span></label>
                    <input
                        type="number"
                        id="bags"
                        min="0"
                        value={formData.bags}
                        onChange={handleChange}
                        placeholder="0"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all placeholder:text-gray-500 text-gray-900
                            ${errors.bags ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-gray-400 focus:border-transparent'}`}
                    />
                    <InputError message={errors.bags} />
                </div>

                {/* Pickup Location */}
                <div className="flex flex-col relative">
                    <label htmlFor="pickup" className="text-sm font-bold text-gray-900 mb-1">Pickup Location <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        placeholder="Enter Address"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all placeholder:text-gray-500 text-gray-900
                            ${errors.pickup ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-gray-400 focus:border-transparent'}`}
                    />
                    <InputError message={errors.pickup} />
                </div>

                {/* Drop off Location */}
                <div className="flex flex-col relative">
                    <label htmlFor="dropoff" className="text-sm font-bold text-gray-900 mb-1">Drop off Location <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="dropoff"
                        value={formData.dropoff}
                        onChange={handleChange}
                        placeholder="Enter Address"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all placeholder:text-gray-500 text-gray-900
                            ${errors.dropoff ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-gray-400 focus:border-transparent'}`}
                    />
                    <InputError message={errors.dropoff} />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center mt-4">
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="px-12 py-4 bg-gradient-to-r from-[#171717] to-[#4a4a4a] text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all font-semibold text-lg disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center min-w-[200px] cursor-pointer"
                    >
                        {status === 'submitting' ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : 'Get Quote'}
                    </button>
                </div>

            </form>
        </div>
    );
}
