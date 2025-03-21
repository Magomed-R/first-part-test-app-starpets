run_docker:
	docker compose up -d db
	sleep 10
	docker compose up migrate && docker compose up -d api
run_native:
	pnpm i || npm i
	pnpm build || npm run build
	pnpm prod || npm run prod