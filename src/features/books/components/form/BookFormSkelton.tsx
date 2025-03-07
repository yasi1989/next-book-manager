import { Skeleton } from "@/components/ui/skeleton"

const BookFormSkelton = () => {
  return (
    <div className="grid container mx-auto px-4 py-8 justify-items-center gap-8">
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
    </div>
  )
}

export default BookFormSkelton