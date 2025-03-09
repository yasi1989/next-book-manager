import { Button } from "@/components/ui/button"
import { TriangleAlertIcon } from "lucide-react"

const BookSearchError = ({errorMsg}: {errorMsg : string}) => {
  return (
    <div className="container mx-auto flex flex-col items-start gap-2 p-4">
      <p className="flex gap-2 items-center"><TriangleAlertIcon className="h-8 w-8" />{errorMsg}</p>
      <Button onClick={() => window.location.reload()}>再試行</Button>
    </div>
  )
}

export default BookSearchError