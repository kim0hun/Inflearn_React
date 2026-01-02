import ButtonGroup from "./components/ButtonGroup";

export default function App() {
  // 초기 버튼 데이터: 각 버튼은 id, label, icon, isDisabled 속성을 가집니다.
  const initialButtons = [
    { id: 1, label: "Button 1", icon: "🔥", isDisabled: false },
    { id: 2, label: "Button 2", icon: "💧", isDisabled: false },
    { id: 3, label: "Button 3", icon: "🌱", isDisabled: true },
    { id: 4, label: "Button 4", icon: "⚡", isDisabled: false },
  ];

  return (
    <>
      <ButtonGroup initialButtons={initialButtons} />
    </>
  );
}
