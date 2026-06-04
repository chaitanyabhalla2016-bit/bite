export function toggleFavorite(favRecipeId){
    if (!favRecipeId) return;
    let favList = getFavorites();
    if(favList?.includes(favRecipeId)){
        console.log('Removed item from the Favorite List');
        removeFavorite(favRecipeId);
        favList = getFavorites();
        return favList;
    }
    favList.push(favRecipeId);
    localStorage.setItem('favorites',JSON.stringify(favList));
    return favList;
}

export function getFavorites(){
    const favList = localStorage.getItem('favorites');
    return favList ? JSON.parse(favList) : [];
}

export function removeFavorite(unFavRecipeId) {
    if (!unFavRecipeId) return;
    const favList = getFavorites();
    const updatedList = favList.filter(id => id !== unFavRecipeId);
    localStorage.setItem('favorites', JSON.stringify(updatedList));
}

export function isFavorite(favRecipeId){
    if (!favRecipeId) return false;
    const favList = getFavorites();
    return favList.includes(Number(favRecipeId));
}