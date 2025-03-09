import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { useActionState } from "react";
import { BookStateReturn } from "../../types/type";
import { deleteBookAction } from "../../utils/book-actions";

type BookDeleteDialogProps = {
  id: string;
};

const BookDeleteDialog = ({ id }: BookDeleteDialogProps) => {
  const deleteBookActionBind = deleteBookAction.bind(null, id);
  const [state, formAction, pending] = useActionState<BookStateReturn>(
    deleteBookActionBind,
    { success: false, error: "" }
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-red-500">
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Book</DialogTitle>
          <DialogDescription>
            本当に削除してもよろしいでしょうか？
          </DialogDescription>
        </DialogHeader>
        {!state.success && <DialogDescription>{state.error}</DialogDescription>}
        <DialogFooter>
          <form action={formAction}>
            <Button variant="destructive" size="sm" disabled={pending}>
              Delete
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookDeleteDialog;
