"use client"

import { useState, useEffect } from "react"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Mail,
  MessageSquare,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  FileText,
  Bell,
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const clientMessages = [
    "can you also just make a quick graphic? 🎨",
    "one more revision pls! 🔄",
    "can you add this to the website too? 💻",
    "just a small tweak, won't take long! ⚡",
    "while you're at it, can you do the mobile version? 📱",
    "oh and we need it by tomorrow! ⏰",
    "can you make the logo bigger? 🔍",
    "actually, let's change the whole concept... 🤯",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % clientMessages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [clientMessages.length])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-blue-400/30 backdrop-blur-sm bg-blue-600/20">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-7 w-7 text-white" />
          <span className="ml-2 text-xl font-bold text-white">ScopeGuard</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-purple-200 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-purple-200 transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-purple-200 transition-colors" href="#testimonials">
            Reviews
          </Link>
        </nav>
        <div className="ml-4 flex gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-blue-500/30">
            Sign In
          </Button>
          <Button size="sm" className="bg-purple-300 text-purple-900 hover:bg-purple-200">
            Start Free Trial
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Split Screen */}
        <section className="w-full min-h-screen flex items-center">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Side - Dashboard Mockup */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                    <div className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-purple-300" />
                      <span className="font-bold text-white">ScopeGuard</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-purple-300/20 rounded-full flex items-center justify-center">
                        <Bell className="h-4 w-4 text-purple-300" />
                      </div>
                      <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">JD</span>
                      </div>
                    </div>
                  </div>

                  {/* Mock Dashboard Content */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">Dashboard</h2>
                      <p className="text-purple-200 text-sm">
                        Smart retainer tracker - keeping clients happy while keeping your sanity
                      </p>
                    </div>

                    {/* Mock Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-purple-200">Active Projects</span>
                          <FileText className="h-4 w-4 text-purple-300" />
                        </div>
                        <div className="text-2xl font-bold text-white">12</div>
                      </div>
                      <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-red-200">Scope Violations</span>
                          <AlertTriangle className="h-4 w-4 text-red-300" />
                        </div>
                        <div className="text-2xl font-bold text-red-300">5</div>
                      </div>
                    </div>

                    {/* Mock Alert */}
                    <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/30">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-300 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-red-200 text-sm">Scope Violation Detected</h4>
                          <p className="text-xs text-red-300 mt-1">
                            Client requested 5 additional pages beyond agreed scope
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-purple-300 text-purple-900 px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                  SCOPE ALERT!
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold">
                  $3,200 SAVED
                </div>
              </div>

              {/* Right Side - Animated Messages */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-purple-300/20 text-purple-200 border-purple-300/30">
                    🛡️ Trusted by 10,000+ freelancers
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Smart Retainer Tracker
                    <br />
                    <span className="text-purple-300">Keeping Clients Happy While Keeping Your Sanity</span>
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Stop letting scope creep destroy your profits and peace of mind. ScopeGuard automatically monitors
                    client requests and protects your boundaries.
                  </p>
                </div>

                {/* Animated Client Messages */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 min-h-[120px] flex items-center">
                  <div className="w-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-300/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-purple-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-white">client@company.com</span>
                          <span className="text-xs text-purple-200">just now</span>
                        </div>
                        <div className="text-lg text-white font-medium transition-all duration-500 ease-in-out">
                          "{clientMessages[currentMessageIndex]}"
                        </div>
                        <div className="mt-3">
                          <Badge variant="destructive" className="bg-red-500/20 text-red-300 border-red-400/30">
                            🚨 Scope Violation Detected
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 backdrop-blur-sm"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className="bg-purple-300 text-purple-900 hover:bg-purple-200 font-semibold px-8">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-blue-200">14-day free trial. No credit card required.</p>

                  <div className="flex items-center gap-6 text-sm text-blue-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-300" />
                      No setup fees
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-300" />
                      Cancel anytime
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-300" />
                      Email support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="w-full py-20 bg-gradient-to-r from-red-500 to-red-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <AlertTriangle className="h-20 w-20 text-white" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Scope Creep is Killing Your Business</h2>
              <p className="max-w-3xl text-xl text-red-100 leading-relaxed">
                Every "small addition" and "quick change" is eating into your profits. You're working more hours for the
                same pay, and your clients expect it for free.
              </p>
              <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 mt-12">
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-5xl font-bold text-white">73%</div>
                  <p className="text-red-100">of freelancers experience scope creep</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-5xl font-bold text-white">$12K</div>
                  <p className="text-red-100">average annual loss per freelancer</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-5xl font-bold text-white">40%</div>
                  <p className="text-red-100">more hours worked for free</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Powerful Features That Protect Your Business
              </h2>
              <p className="max-w-3xl text-xl text-blue-100">
                Everything you need to defend your scope and maintain profitable client relationships.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardHeader>
                  <Mail className="h-12 w-12 text-purple-300 mb-4" />
                  <CardTitle className="text-white">Email Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">
                    Automatically scans client emails for scope violations using AI-powered analysis.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-red-300 mb-4" />
                  <CardTitle className="text-white">Instant Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">
                    Get notified immediately when clients request work beyond your agreed scope.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-green-300 mb-4" />
                  <CardTitle className="text-white">Smart Responses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">
                    Get suggested professional responses to handle scope changes diplomatically.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-purple-300 mb-4" />
                  <CardTitle className="text-white">Revenue Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">Track how much money you've saved by preventing scope creep.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Loved by Freelancers Worldwide</h2>
              <p className="max-w-3xl text-xl text-purple-100">
                See how ScopeGuard is helping freelancers protect their profits and maintain better client
                relationships.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-white">Sarah Chen</CardTitle>
                  <CardDescription className="text-purple-200">Web Designer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">
                    "ScopeGuard saved me $8,000 last quarter alone. It caught scope creep I would have missed and helped
                    me respond professionally. Game changer!"
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-white">Mike Rodriguez</CardTitle>
                  <CardDescription className="text-purple-200">Marketing Consultant</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">
                    "Finally, a tool that understands the freelancer struggle. My clients respect my boundaries more,
                    and I'm making 30% more profit per project."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-white">Emma Thompson</CardTitle>
                  <CardDescription className="text-purple-200">Brand Strategist</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">
                    "The email monitoring is incredible. It flags scope violations I never would have noticed. My client
                    relationships are actually better now!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 bg-gradient-to-br from-blue-700 to-purple-700">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Simple, Transparent Pricing</h2>
              <p className="max-w-3xl text-xl text-blue-100">
                Choose the plan that fits your business. All plans include a 14-day free trial.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">Freelancer</CardTitle>
                  <CardDescription className="text-purple-200">Perfect for solo freelancers</CardDescription>
                  <div className="text-4xl font-bold text-white mt-4">
                    $29<span className="text-lg font-normal text-blue-200">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Up to 5 active projects
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Email monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Scope violation alerts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Basic analytics
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-300 text-purple-900 hover:bg-purple-200 font-semibold">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-lg border-purple-300/50 relative transform scale-105">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-300 text-purple-900 font-bold">
                  Most Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">Professional</CardTitle>
                  <CardDescription className="text-purple-200">For growing agencies</CardDescription>
                  <div className="text-4xl font-bold text-white mt-4">
                    $79<span className="text-lg font-normal text-blue-200">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Up to 25 active projects
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Advanced email monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Smart response suggestions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Team collaboration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Advanced analytics
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-300 text-purple-900 hover:bg-purple-200 font-semibold">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">Enterprise</CardTitle>
                  <CardDescription className="text-purple-200">For large agencies</CardDescription>
                  <div className="text-4xl font-bold text-white mt-4">
                    $199<span className="text-lg font-normal text-blue-200">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Unlimited projects
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Custom integrations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Custom reporting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-purple-300" />
                      Dedicated account manager
                    </li>
                  </ul>
                  <Button className="w-full bg-white/20 text-white border border-white/30 hover:bg-white/30 font-semibold">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Keep Clients Happy AND Your Sanity?
              </h2>
              <p className="max-w-3xl text-xl text-purple-100">
                Join thousands of freelancers who have found the perfect balance between client satisfaction and
                personal well-being with ScopeGuard's smart retainer tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Input
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-purple-200 backdrop-blur-sm"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="bg-purple-300 text-purple-900 hover:bg-purple-200 font-semibold px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-purple-200">14-day free trial. No credit card required. Cancel anytime.</p>

              <div className="flex items-center gap-8 text-purple-100 mt-8">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">10,000+ users</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-semibold">$2.4M saved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  <span className="font-semibold">5-min setup</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/20 bg-blue-800/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200">© 2024 ScopeGuard. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link className="text-sm text-blue-200 hover:text-white transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-blue-200 hover:text-white transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm text-blue-200 hover:text-white transition-colors" href="#">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
