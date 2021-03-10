#!/bin/bash
trap 'kill %%;reset;' EXIT # This ensures both processes are killed if one of them stops

PORT=3001 yarn start & yarn server &

wait
