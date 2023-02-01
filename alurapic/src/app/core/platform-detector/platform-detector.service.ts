import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlatformDetectorService {
  constructor(@Inject(PLATFORM_ID) private PlatformId: string) {}
}
