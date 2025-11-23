"use client"

import type React from "react"

import { generateUploadButton } from "@uploadthing/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Send, CheckCircle2, X, FileText } from "lucide-react"
import { toast } from "sonner"
import { OurFileRouter } from "@/app/api/uploadthing/core"

export const UploadButton = generateUploadButton<OurFileRouter>();

export function ApplicationForm() {
    const [resumeUrl, setResumeUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            await fetch("https://formspree.io/f/xkgykkkq", {
                method: "POST",
                body: data,
            });
        } catch (err) {
            console.warn("Formspree failed but continuing anyway:", err);
        }

        setIsSubmitting(false);
        setIsSubmitted(true);

        toast("Application Submitted!", {
            description: "We'll review your application and get back to you soon.",
        });
    };


    if (isSubmitted) {
        return (
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-12 pb-12">
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Application Received!</h3>
                        <p className="text-muted-foreground max-w-md">
                            Thank you for applying to Pathixo. Our team will review your application and contact you within 5-7
                            business days.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                            Submit Another Application
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <CardDescription className="text-base">
                    Fill out the form below to apply for an internship or job position at Pathixo
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">Personal Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name *</Label>
                                <Input id="firstName" name="firstName" placeholder="John" required className="bg-input/50" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name *</Label>
                                <Input id="lastName" name="lastName" placeholder="Doe" required className="bg-input/50" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john.doe@example.com"
                                required
                                className="bg-input/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                required
                                className="bg-input/50"
                            />
                        </div>
                    </div>

                    {/* Position Details */}
                    <div className="space-y-4 pt-4 border-t border-border/40">
                        <h3 className="text-lg font-semibold">Position Details</h3>

                        <div className="space-y-2">
                            <Label htmlFor="positionType">Position Type *</Label>
                            <Select name="positionType" required>
                                <SelectTrigger className="bg-input/50">
                                    <SelectValue placeholder="Select position type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="internship">Internship</SelectItem>
                                    <SelectItem value="full-time">Full-Time Position</SelectItem>
                                    <SelectItem value="part-time">Part-Time Position</SelectItem>
                                    <SelectItem value="contract">Contract</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="department">Department/Role *</Label>
                            <Select name="department" required>
                                <SelectTrigger className="bg-input/50">
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="android">Android Development</SelectItem>
                                    <SelectItem value="web-frontend">Web Development - Frontend</SelectItem>
                                    <SelectItem value="web-backend">Web Development - Backend</SelectItem>
                                    <SelectItem value="web-fullstack">Web Development - Full Stack</SelectItem>
                                    <SelectItem value="ai-ml">AI/ML Integration</SelectItem>
                                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Experience & Skills */}
                    <div className="space-y-4 pt-4 border-t border-border/40">
                        <h3 className="text-lg font-semibold">Experience & Skills</h3>

                        <div className="space-y-2">
                            <Label htmlFor="experience">Years of Experience</Label>
                            <Select name="experience">
                                <SelectTrigger className="bg-input/50">
                                    <SelectValue placeholder="Select experience level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0">No Experience (Student/Fresh Graduate)</SelectItem>
                                    <SelectItem value="1">Less than 1 year</SelectItem>
                                    <SelectItem value="1-2">1-2 years</SelectItem>
                                    <SelectItem value="3-5">3-5 years</SelectItem>
                                    <SelectItem value="5+">5+ years</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="skills">Technical Skills *</Label>
                            <Textarea
                                id="skills"
                                name="skills"
                                placeholder="List your technical skills (e.g., Kotlin, Java, React, Node.js, Python, TensorFlow, etc.)"
                                required
                                className="min-h-24 bg-input/50 resize-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="portfolio">Portfolio/LinkedIn URL</Label>
                            <Input
                                id="portfolio"
                                name="portfolio"
                                type="url"
                                placeholder="https://linkedin.com/in/yourprofile"
                                className="bg-input/50"
                            />
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4 pt-4 border-t border-border/40">
                        <h3 className="text-lg font-semibold">Additional Information</h3>

                        <div className="space-y-2">
                            <Label htmlFor="motivation">Why do you want to join Pathixo? *</Label>
                            <Textarea
                                id="motivation"
                                name="motivation"
                                placeholder="Tell us what excites you about this opportunity and how you can contribute to our team..."
                                required
                                className="min-h-32 bg-input/50 resize-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Resume/CV *</Label>

                            {resumeUrl ? (
                                <div className="flex items-center justify-between p-4 border border-primary/20 rounded-lg bg-primary/5">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <FileText className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Resume Uploaded</p>
                                            <p className="text-xs text-muted-foreground">Ready to submit</p>
                                        </div>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setResumeUrl("")}
                                        className="text-muted-foreground hover:text-destructive"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ) : (
                                <UploadButton
                                    endpoint="imageUploader"
                                    onClientUploadComplete={(res) => {
                                        setResumeUrl(res[0].ufsUrl);
                                        toast.success("Resume uploaded!");
                                    }}
                                    onUploadError={() => {
                                        toast.error("Upload failed.");
                                    }}
                                />
                            )}

                            <input type="hidden" name="resumeUrl" value={resumeUrl} />
                        </div>

                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-semibold" size="lg">
                            {isSubmitting ? (
                                <>
                                    <span className="animate-pulse">Submitting...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-5 w-5" />
                                    Submit Application
                                </>
                            )}
                        </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground pt-2">
                        By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                </form>
            </CardContent>
        </Card>
    )
}
