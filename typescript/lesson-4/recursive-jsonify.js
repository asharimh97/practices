var Serializer = /** @class */ (function () {
    function Serializer() {
    }
    Serializer.prototype.serialize = function (input) {
        return JSON.stringify(input);
    };
    Serializer.prototype.deserialize = function (input) {
        return JSON.parse(input);
    };
    return Serializer;
}());
var data = {
    avatar: 'https://avatar.stockbit.com/stockbit1dnz5qctpu20191127T134338web.jpeg',
    userName: 'mikuna',
    timeStamp: '31 Mar20, 15:41',
    countUnreadMessage: 5,
    content: 'Program LOTRE SAHAM sudah resmi dirilis oleh REAL minggu lalu hanya dengan membeli 100 lot saham REAL, anda akan mendapatkan kupon undian yang berhadiah...'
};
var itemSerializer = new Serializer();
var serialization = itemSerializer.serialize(data);
var deserialization = itemSerializer.deserialize(serialization);
console.log({ serialization: serialization, deserialization: deserialization });
