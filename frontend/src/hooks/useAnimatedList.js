import { useState, useCallback } from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemovalItemsId, setPendingRemovalItemsId] = useState([]);

  const handleRemoveMessage = useCallback(
    (id) => {
      setPendingRemovalItemsId((prevState) => [...prevState, id]);
    },
    [],
  );

  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
    setPendingRemovalItemsId(
      (prevState) => prevState.filter((itemId) => itemId !== id),
    );
  }, []);

  const renderList = useCallback((renderItem) => items.map(renderItem), [items]);

  return {
    items,
    setItems,
    renderList,
    pendingRemovalItemsId,
    handleAnimationEnd,
    handleRemoveMessage,
  };
}
