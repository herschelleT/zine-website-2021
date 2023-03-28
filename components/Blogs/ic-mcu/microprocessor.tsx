import React from "react";
import Image from "next/image";
import image1 from "../../../images/blog/ic-mcu/microprocessor/image1.png";
import image2 from "../../../images/blog/ic-mcu/microprocessor/image2.png";
import image3 from "../../../images/blog/ic-mcu/microprocessor/image3.png";
import image4 from "../../../images/blog/ic-mcu/microprocessor/image4.gif";
import image5 from "../../../images/blog/ic-mcu/microprocessor/image5.png";
import image6 from "../../../images/blog/ic-mcu/microprocessor/image6.png";
import image7 from "../../../images/blog/ic-mcu/microprocessor/image7.png";

const Microprocessor = () => {
    return (
    <div className="text-black bg-white w-screen">
    <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
      <div className="pl-32 backdrop-blur-xl">
        <h1 className="text-white text-4xl font-bold">
        Microprocessor
        </h1>

      </div>
    </div>

    <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
   
        <p>This is the genius saint sitting in your computer and mobiles. It is also considered as a computer brain, but also it is an incredible calculator! It can do all the arithmetic operations, handle all those big numbers, in fact, If you give this guy enough information, it can do stuff like playing online games, or running microsoft windows!</p>
        <div className="my-8 text-center">
          <Image src={image1} />
        </div>
       <p>It is a controlling unit of a micro-computer. A  single integrated circuit (IC) chip containing all functions of the <a
            className="text-blue-600 underline"
            href="https://en.wikipedia.org/wiki/Central_processing_unit"
          >
         CPU!
          </a> It contains millions of components including transistors, resistors and diodes working together. How does it do all this stuff? Each microprocessor will have the following basic components: </p>
          <div className="my-8 text-center">
          <Image src={image2} />
        </div>
<p>So, you see above, the microprocessor takes input from input devices, is attached to the memory unit for storing data, and produces an output after processing according to the set of instructions given.</p>
<p>By input, we mean normal input which you give through keyboard and other input devices and output means the output we see on our screens.</p>
<p>We will focus on what are the components that make up a microprocessor. They are units that control what to do, how to do it, and where to store.</p>
   <p>The microprocessor has a:</p>  
   <div>
    <ul>
        <li>ALU</li>
        <li>Control Unit</li>
        <li>Register array</li></ul></div> 
      
      
      <p>Arithmetic-Logic Unit</p>
      <p>It is the part of a microprocessor that carries out the arithmetic and logical operations inside a microprocessor. The inputs to an ALU are </p>
      <div>
        <ol>
            <li>
            The data to be operated on, called operands, and 
            </li>
            <li>
            a code indicating the operation to be performed;
            </li>

        </ol>
      </div>
      <p>The output of the ALU is the result of the performed operation. For example, you gave your microprocessor a task to calculate 1+2, then 1 and 2 are the operands, and the ‘+’ is the instruction that tells what to do with the operands, this was an example of arithmetic operation. What are logical operations then? AND, OR, and NOT are all logical operations. Were you able to guess them? </p>
       <h3>Control Unit</h3>
       <p>Now that our ALU has given a task to calculate 1+2, ALU deduces that we have to add 1 and 2 but control is needed for the instruction so provided to add numbers to ALU. Hence, the control unit came into the picture. The control unit directs the operation of the microprocessor, it tells the memory, ALU, input, and output devices about how to respond to the instructions given to them.</p>
       <h3>Register array</h3>
       <p>Our processor now knows what to do and how to do it, but we need to have some space to store that data. So, microprocessors have register arrays for that purpose</p>
        <p>But what is a register? </p>
        <p>A register is a storage element, quickly accessible location available to microprocessors.</p>
        <p>Arrange multiple registers to get an array of registers to store more data.</p>
<p>Many of you must have heard ram as memory used for fast operations with the microprocessor. If so then why do we need registers for our microprocessor, can't it just store data and coordinate with RAM? Try to figure out why? If you need any help, feel free to ask us. </p>
    <h3>How does a microprocessor work?</h3>   
    <p>The microprocessor follows a sequence: Fetch, Decode, Read address from the memory(if needed), and then Execute.</p> 
      <p>Initially, instructions are stored in the memory in sequential order. The microprocessor fetches those instructions from the memory, then decodes it, and then if some data from another memory address is needed then it reads that data and then executes those instructions and the cycle repeats until STOP instruction is reached. Between these processes, the register stores the temporary data, and ALU performs the computations.</p> 
      <div className="my-8 text-center">
          <Image src={image3} />
        </div>
        <p>Here’s a glossary of some of the frequently used terms in a microprocessor:</p>
       <p>Instruction Set: It is the set of instructions that the microprocessor can understand.</p>
      <p>Clock Speed: It determines the number of operations the processor can perform per second. It is expressed in megahertz (MHz) or gigahertz (GHz). It is also known as Clock Rate.</p>
       <p>Data Types: The microprocessor has multiple data type formats like binary, BCD, Hexadecimal.</p>
       <h2>Applications of Microprocessor</h2>
       <div>
        <ol>
            <li>
            Microprocessors are used in computers and laptops where heavy processing is required.
            </li>
            <li>
            Many medical devices, like an <a
            className="text-blue-600 underline"
            href="https://www.webmd.com/diabetes/insulin-pump"
          >insulin pump</a>, are typically controlled by a microprocessor. The microprocessors perform various functions, such as processing data from bio-sensors, storing measurements, and analyzing results. 
            </li>
        </ol>
       </div>
       <h2>Examples of Microprocessors</h2>
       <p>Here are some microprocessors with links attached to them for more info.</p>
       <div className="my-8 text-center">
          <Image src={image4} />
        </div>
       <p><a
            className="text-blue-600 underline"
            href="https://en.wikichip.org/wiki/intel/mcs-4/4004"
          >Intel 4004</a>, the first-ever microprocessor created</p>
        <div className="my-8 text-center">
          <Image src={image5} />
        </div>
        <p><a
            className="text-blue-600 underline"
            href="https://www.tutorialspoint.com/microprocessor/microprocessor_classification.htm"
          >Intel 8085</a>, a microprocessor that can perform basic arithmetic and other logical operations</p>
         <div className="my-8 text-center">
          <Image src={image6} />
        </div>
       <p><a
            className="text-blue-600 underline"
            href="https://www.amd.com/en/products/cpu/amd-ryzen-9-5950x"
          >AMD Ryzen 9 5950X</a>, a microprocessor by AMD</p>
             <div className="my-8 text-center">
          <Image src={image7} />
        </div>
        <p><a
            className="text-blue-600 underline"
            href="https://ark.intel.com/content/www/us/en/ark/products/199332/intel-core-i9-10900k-processor-20m-cache-up-to-5-30-ghz.html"
          >Intel Core i9-10900K</a>, a microprocessor by Intel</p>
        <p>Now, you know about genius saints sitting at the core of your devices. </p>
        <p>Assuming you have a good impression of what microprocessors are. It’s time to talk about MCU (dun dun dun)…</p>
        
        </div>
        </div>
        );
    };
    
    export default Microprocessor;