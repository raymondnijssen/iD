// iD/Relation.js
if (typeof iD === 'undefined') iD = {};

iD.Relation = function(conn, id, members, tags, loaded) {
    this.entityType = 'relation';
    this.connection = conn;
    this.id = id;
    this.members = members;
    this.tags = tags;
    this.modified = this.id < 0;
    this.loaded = (loaded === undefined) ? true : loaded;
    _.each(members, _.bind(function(member) {
        member.entity.addParent(this);
    }, this));
};

iD.RelationMember = function(entity, role) {
    this.entity = entity;
    this.role = role;
};
