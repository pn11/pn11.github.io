#include <emscripten/emscripten.h>

int main(int argc, char ** argv) {
}

#ifdef __cplusplus
extern "C" {
#endif

long long EMSCRIPTEN_KEEPALIVE fibonacci_wasm(long long num) {
    long long a = 1, b = 0, temp;
    while (num >= 1){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}

long long  EMSCRIPTEN_KEEPALIVE fibonacci_wasm_recursive(long long num) {
    if (num <= 2) return 1;
    return fibonacci_wasm_recursive(num - 1) + fibonacci_wasm_recursive(num - 2);
}

#ifdef __cplusplus
}
#endif