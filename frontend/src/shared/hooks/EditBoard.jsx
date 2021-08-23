import { editBoard } from "../../store/actions/boardActions";
import { boardService } from "../../modules/board/service/boardService";
import { useDispatch } from "react-redux";

export const EditBoard = async (board) => {
    const dispatch = useDispatch();
  try {
    // UPDATING THE BOARD (SERVER + STORE)
    const res = await boardService.edit(board._id, board);
    dispatch(editBoard(res));
  } catch (err) {
    console.log(err);
  }
};
