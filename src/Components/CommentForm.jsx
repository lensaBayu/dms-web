import React, { useState } from 'react'
import { motion } from "framer-motion";
import Comments from './Comments';

const CommentForm = () => {
    const [text, setText] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const charCount = text.length;

    return (
        <>
            <div className='text-[25px] text-white pb-[20px]'>Comments</div>


            <div className={`flex border-b ${isFocused ? "border-white" : "border-neutral-700"}  text-white`}>
                <div className="w-full ">
                    <motion.textarea
                        className="w-full outline-none bg-black text-white placeholder-white placeholder:font-thin resize-none"
                        initial={{ height: "40px" }}
                        whileFocus={{ height: "80px" }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        placeholder="Add your comment"
                        value={text}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        maxLength={200}
                    />
                </div>
                <div className={` transition-all ease-in-out duration-300 ${isFocused ? "grid place-content-end p-3" : "flex justify-end pr-3"}  w-[120px] text-[16px] text-white `}>
                    {charCount} / 200
                </div>
            </div>
            {isFocused && text && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex place-content-end text-white mt-5 gap-5 text-[16px]">
                        <button className="bg-neutral-800 p-3 px-6 font-thin " onClick={() => setText("")}>
                            Cancel
                        </button>
                        <button className="bg-white text-black p-3 px-6 font-medium ">
                            Send
                        </button>
                    </div>
                </motion.div>
            )}

            <div className='h-[48px]'></div>

            <Comments />
            <Comments />
            <Comments />


        </>
    )
}

export default CommentForm