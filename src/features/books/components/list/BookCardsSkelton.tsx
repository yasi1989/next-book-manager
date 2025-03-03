import { Skeleton } from "@/components/ui/skeleton"

const BookCardsSkelton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <Skeleton className="bg-slate-200 h-[200px] w-[200px]" />
      <Skeleton className="bg-slate-200 h-[200px] w-[200px]" />
      <Skeleton className="bg-slate-200 h-[200px] w-[200px]" />
      <Skeleton className="bg-slate-200 h-[200px] w-[200px]" />
      <Skeleton className="bg-slate-200 h-[200px] w-[200px]" />
      <Skeleton className="bg-slate-200 h-[200px] w-[200px]" />
      <Skeleton className="bg-slate-200 h-[200px] w-[200px]" />
    </div>
  )
}

export default BookCardsSkelton