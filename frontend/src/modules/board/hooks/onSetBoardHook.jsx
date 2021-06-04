import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { boardService } from "../service/boardService";
import { loadBoards } from "../../../store/actions/boardActions";

export const OnSetBoards = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getBoards = async () => {
      try {
        const res = loadBoards(await boardService.query());
        dispatch(res);
      } catch {
        console.log("err");
      }
    };
    getBoards();
  }, [dispatch]);
};
