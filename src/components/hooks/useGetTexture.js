import { useTexture } from "@react-three/drei"

const useGetTexture = () => {
  const background = useTexture({
    map: "./building/background/diffuse.jpg",
  })
  const bois = useTexture({
    map: "./building/bois/diffuse.jpg",
    normalMap: "./building/bois/normal.jpg",
    roughnessMap: "./building/bois/roughness.jpg",
    metalnessMap: "./building/bois/metalness.jpg",
  })
  const cadres = useTexture({
    map: "./building/cadres/diffuse.jpg",
    normalMap: "./building/cadres/normal.jpg",
    roughnessMap: "./building/cadres/roughness.jpg",
    metalnessMap: "./building/cadres/metalness.jpg",
  })
  const fenetres = useTexture({
    map: "./building/fenetres/diffuse.jpg",
    normalMap: "./building/fenetres/normal.jpg",
    roughnessMap: "./building/fenetres/roughness.jpg",
    metalnessMap: "./building/fenetres/metalness.jpg",
  })
  const luminaire = useTexture({
    map: "./building/luminaire/diffuse.jpg",
    normalMap: "./building/luminaire/normal.jpg",
    roughnessMap: "./building/luminaire/roughness.jpg",
    metalnessMap: "./building/luminaire/metalness.jpg",
  })
  const murs = useTexture({
    map: "./building/murs/diffuse.jpg",
    normalMap: "./building/murs/normal.jpg",
    // roughnessMap: "./building/murs/roughness.jpg",
    metalnessMap: "./building/murs/metalness.jpg",
  })
  const poutres = useTexture({
    map: "./building/poutres/diffuse.jpg",
    normalMap: "./building/poutres/normal.jpg",
    // roughnessMap: "./building/poutres/roughness.jpg",
    metalnessMap: "./building/poutres/metalness.jpg",
  })
  const rideaux = useTexture({
    map: "./building/rideaux/diffuse.jpg",
    normalMap: "./building/rideaux/normal.jpg",
    roughnessMap: "./building/rideaux/roughness.jpg",
    metalnessMap: "./building/rideaux/metalness.jpg",
  })
  const sofa = useTexture({
    map: "./building/sofa/diffuse.jpg",
    normalMap: "./building/sofa/normal.jpg",
    roughnessMap: "./building/sofa/roughness.jpg",
    metalnessMap: "./building/sofa/metalness.jpg",
  })
  const sol = useTexture({
    map: "./building/sol/diffuse.jpg",
    normalMap: "./building/sol/normal.jpg",
    // roughnessMap: "./building/sol/roughness.jpg",
    metalnessMap: "./building/sol/metalness.jpg",
  })

  const table = useTexture({
    map: "./building/table/diffuse.jpg",
    normalMap: "./building/table/normal.jpg",
    roughnessMap: "./building/table/roughness.jpg",
    metalnessMap: "./building/table/metalness.jpg",
  })

  const tapis = useTexture({
    map: "./building/tapis/diffuse.jpg",
    normalMap: "./building/tapis/normal.jpg",
    roughnessMap: "./building/tapis/roughness.jpg",
    metalnessMap: "./building/tapis/metalness.jpg",
  })

  const toit = useTexture({
    map: "./building/toit/diffuse.jpg",
    normalMap: "./building/toit/normal.jpg",
    roughnessMap: "./building/toit/roughness.jpg",
    metalnessMap: "./building/toit/metalness.jpg",
  })
  return { background, bois, cadres, fenetres, luminaire, murs, poutres, rideaux, sofa, sol, table, tapis, toit }
}
export default useGetTexture;