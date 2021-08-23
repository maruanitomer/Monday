import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { boardService } from "../service/boardService";
import { loadBoards } from "../../../store/actions/boardActions";

export const OnSetBoards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getBoards = async () => {
      try {
        const res = await boardService.query();
        console.log(res);
        dispatch(loadBoards(res));
      } catch {}
    };
    getBoards();
  }, [dispatch]);
};
