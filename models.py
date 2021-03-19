def create_classes(db):
    class Thrift(db.Model):
        __tablename__ = 'thrift'

        id = db.Column(db.Integer, primary_key=True)
        item = db.Column(db.String(100))
        size = db.Column(db.String(64))
        name = db.Column(db.String(64))
        color = db.Column(db.String(64))
        maxprice = db.Column(db.Float)
        condition = db.Column(db.String(100))
        notes = db.Column(db.String(100))

        def __repr__(self):
            return '<Thrift %r>' % (self.item)
    return Thrift
