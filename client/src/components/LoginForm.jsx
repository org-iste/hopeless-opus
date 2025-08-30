import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotEmail, setForgotEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Add login logic here
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    console.log("Password reset requested for:", forgotEmail)
    alert(`Password reset link sent to ${forgotEmail}`)
    setShowForgotPassword(false)
    setForgotEmail("")
  }

  if (showForgotPassword) {
    return (
      <Card className="mystical-form backdrop-blur-md border-2">
        <CardHeader>
          <CardTitle className="ancient-text text-3xl text-center font-bold text-shadow-strong">
            Reset Password
          </CardTitle>
          <p className="text-center text-sm text-shadow-horror" style={{ color: "#09D8C7" }}>
            Reclaim your access to the shadows
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForgotPassword} className="space-y-6">
            <div>
              <Label
                htmlFor="forgot-email"
                className="font-semibold text-sm text-shadow-horror"
                style={{ color: "#09D8C7" }}
              >
                Email Address
              </Label>
              <Input
                id="forgot-email"
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
                className="mystical-input mt-2 bg-transparent border-2 text-shadow-horror"
                style={{
                  borderColor: "#17364F",
                  color: "#09D8C7",
                }}
              />
            </div>
            <div className="flex gap-3">
              <Button
                type="submit"
                className="horror-button flex-1 font-bold text-shadow-horror"
              >
                Send Reset Link
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForgotPassword(false)}
                className="home-button flex-1 text-shadow-horror"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mystical-form backdrop-blur-md border-2">
      <CardHeader className="text-center space-y-4">
        <CardTitle className="ancient-text text-3xl font-bold text-shadow-strong">
          Login
        </CardTitle>
        <p className="text-sm text-shadow-horror" style={{ color: "#09D8C7" }}>
          Enter your credentials to access the realm
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label
              htmlFor="email"
              className="font-semibold text-sm text-shadow-horror"
              style={{ color: "#09D8C7" }}
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="mystical-input mt-2 bg-transparent border-2 text-shadow-horror"
              style={{
                borderColor: "#17364F",
                color: "#09D8C7",
              }}
            />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="font-semibold text-sm text-shadow-horror"
              style={{ color: "#09D8C7" }}
            >
              Password
            </Label>
            <div className="relative mt-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="mystical-input bg-transparent border-2 pr-10 text-shadow-horror"
                style={{
                  borderColor: "#17364F",
                  color: "#09D8C7",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform text-shadow-horror"
                style={{ color: "#09D8C7" }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="horror-button w-full font-bold text-lg text-shadow-horror bg-red-600"
          >
            <span className="ancient-text">Enter the Stray Mode {'>'}{'>'}</span>
          </Button>

          <div className="text-center space-y-3">
            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="text-sm underline hover:scale-105 transition-transform font-medium text-shadow-horror"
              style={{ color: "#09D8C7" }}
            >
              Forgot Password?
            </button>
            <div className="text-shadow-horror">
              <span className="font-medium" style={{ color: "#09D8C7" }}>
                {"Don't have a team? "}
              </span>
              <Link
                to="/register"
                className="underline font-bold hover:scale-105 transition-transform text-shadow-horror"
                style={{ color: "#BD0927" }}
              >
                Register here
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 