"use client"
import { useRecoilValue } from "recoil";
import Modal from "./Modal";
import { modalState } from "@/atoms/modalAtom";

function Middle() {
  const showModal = useRecoilValue(modalState);
  return <div>{showModal && <Modal />}</div>;
}

export default Middle;
