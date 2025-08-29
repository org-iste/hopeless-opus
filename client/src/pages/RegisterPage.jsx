import RegisterForm from "@/components/RegisterForm.jsx"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gemini flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy/50 via-dark-navy/30 to-transparent"></div>
      
      {/* Floating horror elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-turquoise/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-plum/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-turquoise/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Enhanced page header */}
        <div className="page-header text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-strong" style={{ color: "#09D8C7" }}>
            Hopeless Opus
          </h1>
          <div className="w-16 h-1 bg-turquoise mx-auto rounded-full shadow-lg shadow-turquoise/50 mb-4"></div>
          <p className="text-xl md:text-2xl font-medium text-shadow-horror" style={{ color: "#FFD700" }}>
            Register Your Team
          </p>
          <p className="text-sm text-shadow-strong mt-2" style={{ color: "#09D8C7" }}>
            Assemble your champions and prepare for the ultimate challenge
          </p>
        </div>
        
        {/* Enhanced form container */}
        <div className="form-container p-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
} 