import * as React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import { CheckIcon } from "@radix-ui/react-icons";

export function IRMIntro() {
    const speedometerSrc = '/images/ic_speedometer.svg';
    const summaryGraphSrc = '/images/ic_summary graph.svg';
    const deviceNasSrc = '/images/ic_Device_state.svg';

    return (
      <div className="space-y-8">
        <div className="flex items-center gap-2 mb-8">
            <img
            src="/images/app_icon.svg"
            alt="iRM Logo"
            width={40}
            height={40}
            />
            <img
                src='/images/logotype.png'
                width={75}
                height={35}
            />
        </div>
  
        <p className="text-gray-700">
          <span className="text-blue-600">iRM</span> is a Centralized Server Management Solution to remotely Discover,
          Monitor and Control all networked computing resources.
        </p>
  
        <div className="space-y-6">
          <IntroItem
            iconImg={speedometerSrc}
            title="Device Management"
            description="Manage devices based on Windows and Linux operating systems, such as servers, industrial or personal computers, and embedded devices."
          />
          <IntroItem
            iconImg={summaryGraphSrc}
            title="Data Visualization"
            description="Support intuitive and customizable dashboards to easily monitor system data of remote devices."
          />
          <IntroItem
            iconImg={deviceNasSrc}
            title="Remote Desktop Gateway"
            description="Provides centralized Remote Desktop Gateway based on IPMI KVM, RDP, VNC & SSH."
          />
        </div>
      </div>
    )
  }


  function IntroItem({
    iconImg,
    title,
    description,
  }) {
    return (
      <div className="flex gap-4">
        <div className="flex-shrink-0">
            <img
                src={iconImg}
                className="w-10 h-10 svg-blue"
            />
        </div>
        <div>
          <h3 className="font-bold text-blue-600 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    )
  }

  export function LoginForm() {
    const [credentials, setCredentials] = React.useState({
      username: "",
      password: ""
    });
    const [error, setError] = React.useState("");
  
    const validCredentials = [
      { username: "admin", password: "admin1234" },
      { username: "iei", password: "iei" },
      { username: "iei", password: "0000" }
    ];
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCredentials(prev => ({
        ...prev,
        [name]: value
      }));
      setError("");
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const isValidCredential = validCredentials.some(
        cred => cred.username === credentials.username && cred.password === credentials.password
      );
      
      if (isValidCredential) {
        // Successfully logged in
        setError("Login successful!");
        // 這裡可以導向到應用的主頁面
      } else {
        setError("Invalid username or password");
      }
    };
  
    const isFormValid = credentials.username.trim() !== "" && credentials.password.trim() !== "";
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                required
                value={credentials.username}
                onChange={handleInputChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                required
                value={credentials.password}
                onChange={handleInputChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
  
          <div className="flex-col items-center">
            <div className="flex items-center space-x-2 py-2">
              <Checkbox.Root 
                className="h-4 w-4 border border-gray-300 rounded flex items-center justify-center" 
                id="remember"
              >
                <Checkbox.Indicator>
                  <CheckIcon className="h-4 w-4 text-primary" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <Label.Root 
                className="text-sm text-gray-500 select-none" 
                htmlFor="remember"
              >
                Remember me
              </Label.Root>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox.Root 
                className="h-4 w-4 border border-gray-300 rounded flex items-center justify-center" 
                id="secure-login"
              >
                <Checkbox.Indicator>
                  <CheckIcon className="h-4 w-4 text-primary" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <Label.Root 
                className="text-sm text-gray-500 select-none" 
                htmlFor="secure-login"
              >
                Secure login
              </Label.Root>
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-300 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    )
  }