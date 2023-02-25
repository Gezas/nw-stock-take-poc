class Item:
    def __init__(self, id, item_tag, history, location, desc, mf_num, ss_num, condition, configured) -> None:
        self.id = id
        self.item_tag = item_tag
        self.history = history
        self.location = location
        self.desc = desc
        self.mf_num = mf_num
        self.ss_num = ss_num
        self.condition = condition
        self.configured = configured