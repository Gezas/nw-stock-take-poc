class ItemRecord:
    def __init__(self, id, item, qty, qty_threshold, locations, pinned) -> None:
        self.id = id
        self.item = item
        self.qty = qty
        self.qty_threshold = qty_threshold
        self.locations = locations
        self.pinned = pinned