"use client"

import { useState, useEffect } from "react"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Mail,
  MessageSquare,
  Shield,
  TrendingUp,
  FileText,
  Bell,
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [email, setEmail] = useState("")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const clientMessages = [
    "can you also just make a quick graphic?",
    "one more revision pls!",
    "can you add this to the website too?",
    "just a small tweak, won't take long!",
    "while you're at it, can you do the mobile version?",
    "oh and we need it by tomorrow!",
    "can you make the logo bigger?",
    "actually, let's change the whole concept...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % clientMessages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [clientMessages.length])

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="px-6 lg:px-8 h-20 flex items-center border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-8 w-8 text-navy-600" />
          <span className="ml-3 text-2xl font-bold text-navy-900 tracking-tight">ScopeGuard</span>
        </Link>
        <nav className="ml-auto flex gap-8">
          <Link className="text-sm font-medium text-slate-600 hover:text-navy-600 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-navy-600 transition-colors" href="#pricing">
            Pricing
          </Link>
        </nav>
        <div className="ml-8">
          <Button size="sm" className="bg-navy-600 text-white hover:bg-navy-700 font-semibold px-6">
            Start Free Trial
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Split Screen */}
        <section className="w-full min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container px-6 md:px-8 mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Dashboard Mockup */}
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 shadow-2xl">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-navy-600" />
                      <span className="font-bold text-navy-900 text-lg">ScopeGuard</span>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                        <Bell className="h-5 w-5 text-slate-600" />
                      </div>
                      <div className="w-10 h-10 bg-navy-600 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">JD</span>
                      </div>
                    </div>
                  </div>

                  {/* Mock Dashboard Content */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900 mb-3">Dashboard</h2>
                      <p className="text-slate-600">
                        Smart retainer tracker - keeping clients happy while keeping your sanity
                      </p>
                    </div>

                    {/* Mock Metrics */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-slate-600">Active Projects</span>
                          <FileText className="h-5 w-5 text-navy-600" />
                        </div>
                        <div className="text-3xl font-bold text-navy-900">12</div>
                      </div>
                      <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-red-600">Violations</span>
                          <AlertTriangle className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="text-3xl font-bold text-red-600">5</div>
                      </div>
                    </div>

                    {/* Mock Alert */}
                    <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Scope Violation Detected</h4>
                          <p className="text-sm text-red-600">
                            Client requested 5 additional pages beyond agreed scope
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  SCOPE ALERT
                </div>
                <div className="absolute -bottom-6 -left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  $3,200 SAVED
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-10">
                <div className="space-y-8">
                  <Badge className="bg-navy-100 text-navy-700 border-navy-200 px-4 py-2">
                    Trusted by 10,000+ freelancers
                  </Badge>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-navy-900">
                    Smart Retainer
                    <br />
                    <span className="text-navy-600">Tracker</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                    Stop scope creep before it destroys your profits and peace of mind.
                  </p>
                </div>

                {/* Animated Client Messages */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 shadow-lg min-h-[140px] flex items-center">
                  <div className="w-full">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-7 w-7 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-semibold text-navy-900">client@company.com</span>
                          <span className="text-sm text-slate-500">just now</span>
                        </div>
                        <div className="text-xl text-slate-700 font-medium transition-all duration-700 ease-in-out min-h-[28px]">
                          "{clientMessages[currentMessageIndex]}"
                        </div>
                        <div className="mt-4">
                          <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
                            Scope Violation Detected
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      className="flex-1 bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 h-12 rounded-2xl focus:border-navy-500 focus:ring-navy-500"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className="bg-navy-600 text-white hover:bg-navy-700 font-semibold px-8 h-12 rounded-2xl">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-slate-500">14-day free trial. No credit card required.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Point Section */}
        <section className="w-full py-32 bg-gradient-to-r from-red-500 to-red-600">
          <div className="container px-6 md:px-8 mx-auto max-w-6xl">
            <div className="text-center space-y-16">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                  "They Always Ask for
                  <br />
                  One More Thing"
                </h2>
                <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                  You've delivered exactly what was agreed upon, but then comes the inevitable follow-up email...
                </p>
              </div>

              {/* Pain Point Examples */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-left">
                  <div className="space-y-4">
                    <div className="text-sm text-red-200">client@startup.com</div>
                    <div className="text-white font-medium text-lg leading-relaxed">
                      "Oh, and can you also design the mobile version? It's basically the same thing..."
                    </div>
                    <Badge className="bg-red-900/30 text-red-200 border-red-700/30">+40 hours</Badge>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-left">
                  <div className="space-y-4">
                    <div className="text-sm text-red-200">marketing@bigcorp.com</div>
                    <div className="text-white font-medium text-lg leading-relaxed">
                      "Just one tiny change - can you make it work for our other 5 brands too?"
                    </div>
                    <Badge className="bg-red-900/30 text-red-200 border-red-700/30">+25 hours</Badge>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-left">
                  <div className="space-y-4">
                    <div className="text-sm text-red-200">ceo@company.com</div>
                    <div className="text-white font-medium text-lg leading-relaxed">
                      "Love it! Now can you create a whole marketing campaign around this concept?"
                    </div>
                    <Badge className="bg-red-900/30 text-red-200 border-red-700/30">+60 hours</Badge>
                  </div>
                </div>
              </div>

              {/* The Result */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white">The Result?</h3>
                  <div className="grid gap-8 md:grid-cols-3">
                    <div className="text-center">
                      <div className="text-4xl mb-4">😤</div>
                      <div className="text-white font-semibold text-lg mb-2">Frustration</div>
                      <div className="text-red-200">You feel taken advantage of</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">💸</div>
                      <div className="text-white font-semibold text-lg mb-2">Lost Profits</div>
                      <div className="text-red-200">Working for free, again</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">😰</div>
                      <div className="text-white font-semibold text-lg mb-2">Burnout</div>
                      <div className="text-red-200">Your sanity slowly disappears</div>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-white/20">
                    <p className="text-xl text-white font-semibold">
                      You want to say no, but you're afraid of losing the client...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-32 bg-navy-900">
          <div className="container px-6 md:px-8 mx-auto max-w-6xl">
            <div className="text-center space-y-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                Scope Creep is Killing
                <br />
                Your Business
              </h2>
              <div className="grid gap-12 lg:grid-cols-3">
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-white">73%</div>
                  <p className="text-slate-300 text-lg">of freelancers experience scope creep</p>
                </div>
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-white">$12K</div>
                  <p className="text-slate-300 text-lg">average annual loss per freelancer</p>
                </div>
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-white">40%</div>
                  <p className="text-slate-300 text-lg">more hours worked for free</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-32 bg-slate-50">
          <div className="container px-6 md:px-8 mx-auto max-w-6xl">
            <div className="text-center space-y-16">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold text-navy-900 tracking-tight">Powerful Features</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Everything you need to defend your scope and maintain profitable client relationships.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center space-y-4">
                    <Mail className="h-12 w-12 text-navy-600 mx-auto" />
                    <CardTitle className="text-navy-900 text-xl">Email Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">
                      Automatically scans client emails for scope violations using AI-powered analysis.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center space-y-4">
                    <AlertTriangle className="h-12 w-12 text-red-500 mx-auto" />
                    <CardTitle className="text-navy-900 text-xl">Instant Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">
                      Get notified immediately when clients request work beyond your agreed scope.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center space-y-4">
                    <MessageSquare className="h-12 w-12 text-green-600 mx-auto" />
                    <CardTitle className="text-navy-900 text-xl">Smart Responses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">
                      Get suggested professional responses to handle scope changes diplomatically.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center space-y-4">
                    <TrendingUp className="h-12 w-12 text-navy-600 mx-auto" />
                    <CardTitle className="text-navy-900 text-xl">Revenue Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">
                      Track how much money you've saved by preventing scope creep.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-32 bg-white">
          <div className="container px-6 md:px-8 mx-auto max-w-6xl">
            <div className="text-center space-y-16">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold text-navy-900 tracking-tight">Simple Pricing</h2>
                <p className="text-xl text-slate-600">Choose the plan that fits your business.</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                <Card className="bg-white border-slate-200 rounded-3xl p-8 shadow-lg">
                  <CardHeader className="text-center space-y-6">
                    <CardTitle className="text-navy-900 text-2xl">Freelancer</CardTitle>
                    <div className="text-5xl font-bold text-navy-900">
                      $29<span className="text-xl font-normal text-slate-600">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <ul className="space-y-4 text-slate-600">
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
                        Up to 5 active projects
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
                        Email monitoring
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
                        Scope violation alerts
                      </li>
                    </ul>
                    <Button className="w-full bg-navy-600 text-white hover:bg-navy-700 font-semibold h-12 rounded-2xl">
                      Start Free Trial
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-navy-900 border-navy-700 relative transform scale-105 rounded-3xl p-8 shadow-2xl">
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-navy-900 font-bold px-4 py-2">
                    Most Popular
                  </Badge>
                  <CardHeader className="text-center space-y-6">
                    <CardTitle className="text-white text-2xl">Professional</CardTitle>
                    <div className="text-5xl font-bold text-white">
                      $79<span className="text-xl font-normal text-slate-300">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <ul className="space-y-4 text-slate-300">
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                        Up to 25 active projects
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                        Advanced email monitoring
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                        Smart response suggestions
                      </li>
                    </ul>
                    <Button className="w-full bg-white text-navy-900 hover:bg-slate-100 font-semibold h-12 rounded-2xl">
                      Start Free Trial
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-slate-200 rounded-3xl p-8 shadow-lg">
                  <CardHeader className="text-center space-y-6">
                    <CardTitle className="text-navy-900 text-2xl">Enterprise</CardTitle>
                    <div className="text-5xl font-bold text-navy-900">
                      $199<span className="text-xl font-normal text-slate-600">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <ul className="space-y-4 text-slate-600">
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
                        Unlimited projects
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
                        Custom integrations
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
                        Priority support
                      </li>
                    </ul>
                    <Button className="w-full bg-slate-100 text-navy-900 border border-slate-300 hover:bg-slate-200 font-semibold h-12 rounded-2xl">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-32 bg-navy-900">
          <div className="container px-6 md:px-8 mx-auto max-w-4xl">
            <div className="text-center space-y-12">
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                Ready to Keep Clients Happy
                <br />
                <span className="text-slate-300">AND Your Sanity?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  className="flex-1 bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 h-12 rounded-2xl"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="bg-white text-navy-900 hover:bg-slate-100 font-semibold px-8 h-12 rounded-2xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-slate-400">14-day free trial. No credit card required.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="container px-6 md:px-8 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-slate-600">© 2024 ScopeGuard. All rights reserved.</p>
            <nav className="flex gap-8">
              <Link className="text-slate-600 hover:text-navy-600 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-slate-600 hover:text-navy-600 transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-slate-600 hover:text-navy-600 transition-colors" href="#">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
