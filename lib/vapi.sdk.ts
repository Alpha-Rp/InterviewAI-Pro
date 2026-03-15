import Vapi from '@vapi-ai/web'

const vapiPublicKey =
	process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY ?? process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;

if (!vapiPublicKey) {
	throw new Error(
		'Missing Vapi key. Set NEXT_PUBLIC_VAPI_PUBLIC_KEY in .env.local.'
	);
}

// Vapi public keys are not UUIDs; UUID-like values usually mean the wrong credential was used.
if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(vapiPublicKey)) {
	console.warn(
		'NEXT_PUBLIC_VAPI_PUBLIC_KEY looks like a UUID. Use your Vapi Public Key from the dashboard (Developers section).'
	);
}

export const vapi = new Vapi(vapiPublicKey)