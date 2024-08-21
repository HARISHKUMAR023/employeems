import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  justify-center items-center min-h-screen  bg-white  rounded-sm ">
      <div className="flex items-center shadow-2xl ">
      <div className="m-10">
    <Image src="./login.svg" alt="Login illustion " width={700} height={700}></Image>
   </div>
   <div className="m-10">
    <h2 className="text-center font-bold text-2xl ">Login</h2>
    <form action="">
      <label htmlFor="email">Email:</label><br />
      <input type="text" className="input" placeholder="Enter Your Email" /><br />
      <label htmlFor="password">Password:</label><br />
      <input type="password" className="input" name="" id="" placeholder="Enter Your password" /><br />
      <button className="btn-primary">Login</button>
    </form>
   </div>
      </div>
  
    </main>
  );
}
