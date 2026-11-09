import React from 'react'
import { Mail,Phone,MapPin,Send,UserRound,Bookmark,MessageCircleExclamationPoint} from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return(
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 px-2 md:px-25 gap-20 lg:gap-6 animate-page">

            <div className="flex flex-col w-full lg:w-1/2 gap-4">

                <h2 className="text-5xl text-gray-300 font-bold">Get In <span className="text-[#8B5CF6] underline-offset-8 underline">Touch</span></h2>

                <p className="text-gray-300 border-l-4 border-[#8B5CF6] pl-4 mt-4 w-full md:w-[80%]">Have a question, an idea, or a project in mind? I'd love to hear from you! Let's connect and create something amazing together.</p>

                <div className="flex flex-col gap-4 mt-6">

                    <div className="w-full md:w-[70%] h-16 bg-[#1E293B]/65 border-2 border-[#8B5CF6]/45 hover:border-[#8B5CF6]/80 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] rounded-xl flex items-center gap-4 px-4">
                        <Mail className="size-12 text-[#A78BFA] p-2 bg-[#8B5CF6]/25 border border-[#8B5CF6]/30 rounded" />
                        <div className="flex flex-col text-gray-300">
                            <h2 className="text-lg font-semibold">Email</h2>
                            <h2 className="text-s">gmail.com</h2>
                        </div>
                    </div>

                    <div className="w-full md:w-[70%] h-16 bg-[#1E293B]/65 border-2 border-[#8B5CF6]/45 hover:border-[#8B5CF6]/80 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] rounded-xl flex items-center gap-4 px-4">
                        <Phone className="size-12 text-[#A78BFA] p-2 bg-[#8B5CF6]/25 border border-[#8B5CF6]/30 rounded" />
                        <div className="flex flex-col text-gray-300">
                            <h2 className="text-lg font-semibold">Phone</h2>
                            <h2 className="text-s">+91 0000000000</h2>
                        </div>
                    </div>

                    <div className="w-full md:w-[70%] h-16 bg-[#1E293B]/65 border-2 border-[#8B5CF6]/45 hover:border-[#8B5CF6]/80 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] rounded-xl flex items-center gap-4 px-4">
                        <MapPin className="size-12 text-[#A78BFA] p-2 bg-[#8B5CF6]/25 border border-[#8B5CF6]/30 rounded" />
                        <div className="flex flex-col text-gray-300">
                            <h2 className="text-lg font-semibold">Location</h2>
                            <h2 className="text-s">Mumbai,India</h2>
                        </div>
                    </div>

                </div>

                <div className="flex items-center gap-4 mt-8">
                    <h2 className="text-2xl font-bold text-white">Find Me On</h2>
                    <div className="w-20 h-[3px] bg-[#8B5CF6] rounded-full"></div>
                </div>

                <div className="flex items-center gap-5 mt-4">

                    <a href="https://github.com/ansarimohdashraf02-cmd"
                        target="_blank"
                        className="w-12 h-12 flex items-center justify-center rounded-2xl
                        bg-[#1E293B]/65 border border-[#8B5CF6]/45
                        text-[#A78BFA] hover:text-white
                        hover:border-[#8B5CF6]
                        hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]
                        hover:-translate-y-1 transition-all duration-300">
                        <FaGithub size={20} />
                    </a>

                    <a href="https://linkedin.com"
                        target="_blank"
                        className="w-12 h-12 flex items-center justify-center rounded-2xl
                        bg-[#1E293B]/65 border border-[#8B5CF6]/45
                        text-[#A78BFA] hover:text-white
                        hover:border-[#8B5CF6]
                        hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]
                        hover:-translate-y-1 transition-all duration-300">
                        <FaLinkedin size={20} />
                    </a>

                    <a href="https://instagram.com"
                        target="_blank"
                        className="w-12 h-12 flex items-center justify-center rounded-2xl
                        bg-[#1E293B]/65 border border-[#8B5CF6]/45
                        text-[#A78BFA] hover:text-white
                        hover:border-[#8B5CF6]
                        hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]
                        hover:-translate-y-1 transition-all duration-300">
                        <FaInstagram size={20} />
                    </a>

                </div>

            </div>

            <div className="w-[95%] md:w-[80%] lg:w-[40%] h-auto bg-[#1E293B] border-2 border-[#8B5CF6]/45 shadow-[0_0_25px_rgba(139,92,246,0.12)] flex flex-col p-4 rounded-xl">
                <h2 className="text-3xl text-gray-300 font-semibold mb-4 flex items-center"><Send className="mr-4 text-[#A78BFA] size-8 text-shadow-[0_0_10px_rgba(167,139,250,0.5)]" /> Send Me A Message</h2>

                <form className="flex flex-col gap-5">
                    
                        <div className="flex items-center bg-[#0F172A] border border-[#8B5CF6]/35 rounded-lg px-4">
                            <UserRound className="text-[#A78BFA] size-5" />
                            <input
                                type="text" placeholder="Enter your name"
                                className="w-full bg-transparent text-white px-3 py-3 outline-none placeholder:text-gray-500"
                            />
                        </div>
                    
                        <div className="flex items-center bg-[#0F172A] border border-[#8B5CF6]/35 rounded-lg px-4">
                            <Mail className="text-[#A78BFA] size-5" />
                            <input
                                type="email" placeholder="Enter your email"
                                className="w-full bg-transparent text-white px-3 py-3 outline-none placeholder:text-gray-500"
                            />
                        </div>
                    
                        <div className="flex items-center bg-[#0F172A] border border-[#8B5CF6]/35 rounded-lg px-4">
                            <Bookmark className="text-[#A78BFA] size-5" />
                            <input
                                type="text" placeholder="Enter subject"
                                className="w-full bg-transparent text-white px-3 py-3 outline-none placeholder:text-gray-500"
                            />
                        </div>
                
                        <div className="flex items-start bg-[#0F172A] border border-[#8B5CF6]/35 rounded-lg px-4 py-3">
                            <MessageCircleExclamationPoint className="text-[#A78BFA] size-5 mt-1" />
                            <textarea
                                rows="4" placeholder="Write your message here..."
                                className="w-full bg-transparent text-white px-3 outline-none resize-none placeholder:text-gray-500"
                            ></textarea>
                        </div>

                   
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold hover:shadow-[0_0_18px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all duration-300"
                    > <Send size={20} /> Send Message
                    </button>

                </form>

            </div>

        </div>

    )
}

export default Contact