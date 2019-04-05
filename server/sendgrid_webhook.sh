function localtunnel {
  lt -s obndpsognapoigia --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done