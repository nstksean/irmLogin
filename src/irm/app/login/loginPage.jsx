import LoginHeader from "./loginHeader"
import {IRMIntro, LoginForm } from "./loginBody"


export default function LoginPage({ handleLogin }) {
    
    return (
      <div className="">
        <LoginHeader/>
        <main className=" min-h-screen flex flex-col justify-center items-center bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto w-full bg-blue-50 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <IRMIntro/>
              <LoginForm handleLogin={handleLogin}/>
            </div>
          </div>
        </main>
      </div>
    )
  }