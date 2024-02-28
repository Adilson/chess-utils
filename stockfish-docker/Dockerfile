FROM alpine:latest AS builder

RUN apk add git g++ make
RUN git clone --depth 1 --branch sf_16 https://github.com/official-stockfish/Stockfish.git

WORKDIR /Stockfish/src
RUN make build ARCH=x86-64-bmi2


FROM alpine:latest
COPY ./start.sh /

RUN chmod +x /start.sh \
 && apk add --no-cache libstdc++ ucspi-tcp6 \
 && addgroup -g 1000 stockfish \
 && adduser -u 1000 -G stockfish -HD stockfish

WORKDIR /stockfish/
USER stockfish:stockfish

COPY --chown=stockfish:stockfish --from=builder /Stockfish/src/stockfish /stockfish/
COPY --chown=stockfish:stockfish --from=builder /Stockfish/Copying.txt /stockfish/
COPY --chown=stockfish:stockfish --from=builder /Stockfish/src/*.nnue /stockfish/

EXPOSE 23249
WORKDIR /
ENTRYPOINT ["/start.sh"]