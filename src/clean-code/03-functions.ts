;(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId })
  }

  function getActorsById(movieId: string) {
    console.log({ movieId })
  }

  function getActorBioById(ActorId: string) {
    console.log({ ActorId })
  }

  interface Movie {
    title: string
    description: string
    rating: number
    cast: string[]
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast })
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false

    console.log('Crear actor', birthdate)
    return true
  }

  // Continuar
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500

    if (isSeparated) return 2500

    return isRetired ? 3000 : 4000
  }
})()
