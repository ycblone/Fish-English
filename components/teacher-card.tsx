"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Globe } from "lucide-react"

interface TeacherCardProps {
  name: string
  title: string
  country: string
  image: string
  certifications: string[]
  specialties: string[]
}

export default function TeacherCard({ name, title, country, image, certifications, specialties }: TeacherCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 h-full"
      style={{
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        boxShadow: isHovered ? "0 10px 25px rgba(0, 0, 0, 0.1)" : "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-2 bg-gradient-to-t from-black/70 to-transparent">
          <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
            <Facebook className="h-4 w-4 text-white" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
            <Twitter className="h-4 w-4 text-white" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
            <Linkedin className="h-4 w-4 text-white" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{country}</span>
        </div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4 pt-0">
        <div className="w-full">
          <p className="text-xs font-semibold mb-1">Certifications:</p>
          <div className="flex flex-wrap gap-1">
            {certifications.map((cert) => (
              <Badge key={cert} variant="outline" className="text-xs">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
        <div className="w-full">
          <p className="text-xs font-semibold mb-1">Specialties:</p>
          <div className="flex flex-wrap gap-1">
            {specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

