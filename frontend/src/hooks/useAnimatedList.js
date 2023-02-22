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

  const renderList = useCallback((renderItem) => (
    items.map((item) => renderItem(item, {
      isLeaving: pendingRemovalItemsId.includes(item.id),
    }))
  ), [items, pendingRemovalItemsId]);

  return {
    items,
    setItems,
    renderList,
    handleAnimationEnd,
    handleRemoveMessage,
  };
}
