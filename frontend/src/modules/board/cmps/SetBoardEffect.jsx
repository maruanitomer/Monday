import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { boardService } from "../service/boardService";
import { loadBoards } from "../../../store/actions/boardActions";

export const OnSetBoards = (filter) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getBoards = async () => {
      try {
        console.log(filter)
        const res = await boardService.query(filter);
        console.log(res);
        dispatch(loadBoards(res));
      } catch {}
    };
    getBoards();
  }, [dispatch,filter]);
};
