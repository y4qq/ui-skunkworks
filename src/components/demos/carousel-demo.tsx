import { Example } from "@/components/example"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function CarouselDemo() {
  return (
    <>
      <Example title="Default" className="items-center">
        <div className="w-full max-w-xs">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{i + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Example>
    </>
  )
}
