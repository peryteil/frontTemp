"use client"

import { useEffect, useRef, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"

interface MapComponentProps {
  center: { lat: number; lng: number }
  zoom?: number
  markers?: Array<{
    id: string
    position: { lat: number; lng: number }
    title: string
    selected?: boolean
  }>
  onMarkerClick?: (markerId: string) => void
  height?: string
}

export function MapComponent({ center, zoom = 13, markers = [], onMarkerClick, height = "100%" }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [googleMarkers, setGoogleMarkers] = useState<{ [key: string]: google.maps.Marker }>({})

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyBnSrCl0UvzIq1sDYCGnRaLxHVZ5ZKiNww", // 실제 서비스에서는 환경 변수로 관리해야 합니다
        version: "weekly",
        libraries: ["places"],
      })

      try {
        const google = await loader.load()

        if (mapRef.current) {
          const mapInstance = new google.maps.Map(mapRef.current, {
            center,
            zoom,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: true,
            styles: [
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "on" }],
              },
              {
                featureType: "transit",
                elementType: "labels",
                stylers: [{ visibility: "on" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
              },
            ],
          })
          setMap(mapInstance)

          // 마커 생성
          if (markers.length > 0) {
            const newGoogleMarkers: { [key: string]: google.maps.Marker } = {}

            markers.forEach((marker) => {
              const googleMarker = new google.maps.Marker({
                position: marker.position,
                map: mapInstance,
                title: marker.title,
                icon: marker.selected
                  ? {
                      url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                      scaledSize: new google.maps.Size(50, 50),
                    }
                  : {
                      url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                      scaledSize: new google.maps.Size(40, 40),
                    },
                animation: marker.selected ? google.maps.Animation.BOUNCE : null,
              })

              // 정보창 생성
              const infoWindow = new google.maps.InfoWindow({
                content: `<div style="padding: 8px; max-width: 200px;">
                  <strong>${marker.title}</strong>
                  <p style="margin: 4px 0 0;">클릭하여 선택</p>
                </div>`,
              })

              // 마커에 마우스 오버 이벤트 추가
              googleMarker.addListener("mouseover", () => {
                infoWindow.open(mapInstance, googleMarker)
              })

              // 마커에서 마우스 아웃 이벤트 추가
              googleMarker.addListener("mouseout", () => {
                infoWindow.close()
              })

              if (onMarkerClick) {
                googleMarker.addListener("click", () => {
                  onMarkerClick(marker.id)
                })
              }

              newGoogleMarkers[marker.id] = googleMarker
            })

            setGoogleMarkers(newGoogleMarkers)

            // 마커가 있으면 지도 중심과 줌 조정
            if (markers.length === 1) {
              mapInstance.setCenter(markers[0].position)
              mapInstance.setZoom(15)
            } else {
              const bounds = new google.maps.LatLngBounds()
              markers.forEach((marker) => {
                bounds.extend(marker.position)
              })
              mapInstance.fitBounds(bounds)
            }
          }
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error)
      }
    }

    if (!map) {
      initMap()
    }
  }, [center, zoom, map])

  // 마커 업데이트
  useEffect(() => {
    if (!map) return

    // 기존 마커 제거
    Object.values(googleMarkers).forEach((marker) => {
      marker.setMap(null)
    })

    const newGoogleMarkers: { [key: string]: google.maps.Marker } = {}

    // 새 마커 생성
    markers.forEach((marker) => {
      const googleMarker = new google.maps.Marker({
        position: marker.position,
        map,
        title: marker.title,
        icon: marker.selected
          ? {
              url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
              scaledSize: new google.maps.Size(50, 50),
            }
          : {
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              scaledSize: new google.maps.Size(40, 40),
            },
        animation: marker.selected ? google.maps.Animation.BOUNCE : null,
      })

      // 정보창 생성
      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="padding: 8px; max-width: 200px;">
  <strong>${marker.title}</strong>
  <p style="margin: 4px 0 0;">클릭하여 선택</p>
</div>`,
      })

      // 마커에 마우스 오버 이벤트 추가
      googleMarker.addListener("mouseover", () => {
        infoWindow.open(map, googleMarker)
      })

      // 마커에서 마우스 아웃 이벤트 추가
      googleMarker.addListener("mouseout", () => {
        infoWindow.close()
      })

      if (onMarkerClick) {
        googleMarker.addListener("click", () => {
          onMarkerClick(marker.id)
        })
      }

      newGoogleMarkers[marker.id] = googleMarker
    })

    setGoogleMarkers(newGoogleMarkers)

    // 마커가 있으면 지도 중심과 줌 조정
    if (markers.length > 0) {
      if (markers.length === 1) {
        map.setCenter(markers[0].position)
        map.setZoom(15)
      } else {
        const bounds = new google.maps.LatLngBounds()
        markers.forEach((marker) => {
          bounds.extend(marker.position)
        })
        map.fitBounds(bounds)
      }
    }

    return () => {
      Object.values(newGoogleMarkers).forEach((marker) => {
        marker.setMap(null)
      })
    }
  }, [map, markers, onMarkerClick])

  return <div ref={mapRef} style={{ width: "100%", height }} className="rounded-lg" />
}
