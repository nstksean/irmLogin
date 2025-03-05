export default function LoginHeader() {
  const I18nLogo = '/images/more_language.png'
  return (
    <header className="flex justify-between items-center p-4 pb-0 bg-[#F4F8F9]">
    <div className="flex items-center gap-2">
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
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <img
        src={I18nLogo}
        alt="i18n Logo" 
        className="w-5 h-5 text-gray-600" 
        />
    </button>
  </header>
  )
}