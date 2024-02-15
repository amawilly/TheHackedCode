#include <iostream>
#include <vector>
using namespace std;
int calculateX(vector<vector<int>> &matrix, int i, int j, int size, vector<vector<bool>> &flags){
    int h = size/2+1;
    int k = 0, t = 0;
    int len1 = size, len2 = size, len3 = size;
    for (int w = j; ((w <= h) && (w >= 0)); w++){
       for (int q = i + 1; q < len1; q++){
            if (matrix[q][w] == 1) k++;
       }
       len1-=2;
    }
    for (int w = j; ((w <= h) && (w >= 0)); w++){
       for (int q = i + 1; q < len2; q++){
            if (flags[q][w] == true) t++;
       }
       len2-=2;
    }
    if ((k == (size - size/2) - size) && (k != t)){
        for (int w = j; ((w <= h) && (w >= 0)); w++){
            for (int q = i + 1; q < len3; q++){
                flags[q][w] = true;
            }
            len3-=2;
        }
        return 1;
    }
    else return 0;
}
int findXPiramide(vector<vector<int>> &matrix, int size, vector<vector<bool>> &flags){
    int rezult = 0;
    if (size < 3) return rezult;
    for (int i = 0; i < matrix.size(); i++){
        int k = 0;
        for (int j = 0; j < matrix[0].size(); j++){
            matrix[i][j] == 1? k++: k = 0;
    if (k >= size) rezult+=calculateX(matrix, (i - size) + 1, j + 1, size, flags);
        }
    }
    size -= 2;
    findXPiramide(matrix, size, flags);
    return rezult;
}
int main(){
    int x, y;
    cin >> x >> y; 
    vector<vector<int>> matrix(x, vector<int>(y));
    vector<vector<bool>> flags(matrix.size(), vector<bool>(matrix[0].size()));

    for (int i = 0; i < x; i++){
        for (int j = 0; j < y; j++){
            cin >> matrix[i][j];
        }
    }
    x % 2 == 0? x -= 1: x = x;
    int Xpyramid = findXPiramide(matrix, x, flags);
    cout << Xpyramid << endl;
    return 0;
}