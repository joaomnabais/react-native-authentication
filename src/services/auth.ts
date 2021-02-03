interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'xsbycwdnhubgrmokvbfrmokcqewdijnbrnjoi',
        user: {
          name: 'João',
          email: 'joao.nabais017@gmail.com'
        },
      });
    }, 500);
  });
}