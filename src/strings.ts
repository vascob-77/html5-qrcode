/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `Erreur d'analyse du code QR, erreur = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Erreur lors de l'obtention de userMedia, erreur = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "Le dispositif ne prend pas en charge navigator.mediaDevices, "
        + "seul l'identifiant de caméra ou la configuration de l'ID de dispositif "
        + "sont pris en charge dans ce cas (en tant que chaîne de caractères).";
    }

    public static cameraStreamingNotSupported(): string {
        return "La diffusion en continu de la caméra n'est pas prise en charge par le navigateur.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Impossible d'interroger les dispositifs pris en charge, erreur inconnue.";
    }

    public static insecureContextCameraQueryError(): string {
        return "L'accès à la caméra est uniquement pris en charge dans un contexte sécurisé "
        + "tel que https ou localhost.";
    }

    public static scannerPaused(): string {
        return "Scanner en pause";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "Analyse en cours";
    }

    public static idleStatus(): string {
        return "Inactif";
    }

    public static errorStatus(): string {
        return "Erreur";
    }

    public static permissionStatus(): string {
        return "Autorisation";
    }

    public static noCameraFoundErrorStatus(): string {
        return "Aucune caméra";
    }

    public static lastMatch(decodedText: string): string {
        return `Dernière correspondance : ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "Scanner de codes";
    }

    public static cameraPermissionTitle(): string {
        return "Demande d'autorisation de la caméra";
    }

    public static cameraPermissionRequesting(): string {
        return "Demande d'autorisation de la caméra en cours...";
    }

    public static noCameraFound(): string {
        return "Aucune caméra trouvée";
    }

    public static scanButtonStopScanningText(): string {
        return "Arrêter l'analyse";
    }

    public static scanButtonStartScanningText(): string {
        return "Démarrer l'analyse";
    }

    public static torchOnButton(): string {
        return "Activer la torche";
    }

    public static torchOffButton(): string {
        return "Désactiver la torche";
    }

    public static torchOnFailedMessage(): string {
        return "Impossible d'activer la torche";
    }

    public static torchOffFailedMessage(): string {
        return "Impossible de désactiver la torche";
    }

    public static scanButtonScanningStarting(): string {
        return "Démarrage de la caméra...";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "Scanner un fichier image";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "Scanner directement avec la caméra";
    }

    public static selectCamera(): string {
        return "Sélectionner une caméra";
    }

    public static fileSelectionChooseImage(): string {
        return "Choisir une image";
    }

    public static fileSelectionChooseAnother(): string {
        return "Choisir une autre";
    }

    public static fileSelectionNoImageSelected(): string {
        return "Aucune image sélectionnée";
    }

    /** Prefix to be given to anonymous cameras. */
    public static anonymousCameraPrefix(): string {
        return "Caméra anonyme";
    }

    public static dragAndDropMessage(): string {
        return "Ou glissez-déposez une image à scanner";
    }

    public static dragAndDropMessageOnlyImages(): string {
        return "Ou glissez-déposez une image à scanner (les autres fichiers ne sont pas pris en charge)";
    }

    /** Value for zoom. */
    public static zoom(): string {
        return "zoom";
    }

    public static loadingImage(): string {
        return "Chargement de l'image...";
    }

    public static cameraScanAltText(): string {
        return "Scan basé sur la caméra";
    }

    public static fileScanAltText(): string {
        return "Scan basé sur un fichier";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static poweredBy(): string {
        return "Propulsé par ";
    }

    public static reportIssues(): string {
        return "Signaler des problèmes";
    }
}
