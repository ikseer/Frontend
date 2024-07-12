// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { GOOGLE_CLIENT_ID } from '@/lib/constants';
//
// export function OauthWithGoogle() {
// 	return (
// 			<GoogleLogin
// 				onSuccess={credentialResponse => {
// 					const idToken = credentialResponse.credential;
// 					console.log(idToken, "id Token")
// 					const res = await fetch('https://oauth2.googleapis.com/token', {
// 						method: 'POST',
// 						headers: {
// 							'Content-Type': 'application/x-www-form-urlencoded',
// 						},
// 						body: new URLSearchParams({
// 							code: idToken,
// 							client_id: GOOGLE_CLIENT_ID,
// 							client_secret: "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",
// 							redirect_uri: "http://localhost:3000",
// 							grant_type: 'authorization_code',
// 						}).toString(),
// 					});
// 				}}
// 			/>
// 	);
// }
