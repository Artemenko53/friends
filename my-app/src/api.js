export const FriendsAPI = {
  friends: [
    { number: 1, name: "Danya Vatras", wins: "13" },
    { number: 2, name: "Artem Borysenko", wins: "14" },
    { number: 3, name: "Vanya Filatov", wins: "12" },
    { number: 4, name: "Sviatoslav Nazarenko", wins: "13" },
    { number: 5, name: "Anya Zaitseva", wins: "11" },
    { number: 6, name: "Oleg Goncharov", wins: "13" },
  ],
  all: function () {
    return this.friends;
  },
  get: function (id) {
    const isFriend = (p) => p.number === id;
    return this.friends.find(isFriend);
  },
};
