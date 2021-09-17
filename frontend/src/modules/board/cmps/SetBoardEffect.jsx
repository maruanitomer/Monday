import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { boardService } from "../service/boardService";
import { loadBoards } from "../../../store/actions/boardActions";

export const OnSetBoards = (filter) => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      boardService.query(filter).then((res) => {
        dispatch(loadBoards(res));
      });
    } catch { }
  }, [dispatch, filter]);
};

