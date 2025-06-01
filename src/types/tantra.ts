export interface MeditationTechnique {
  description: string;
}

export interface MeditationCategory {
  name: string;
  icon: string;
  techniques: MeditationTechnique[];
}

export interface KeyFigure {
  name: string;
  icon: string;
  description: string;
}

export interface TantraPrinciple {
  title: string;
  icon: string;
  description: string;
}

export interface TantraClassification {
  title: string;
  description: string;
  subcategories?: {
    name: string;
    description: string;
  }[];
}

export interface ComparativeApproach {
  approach: string;
  primaryFocus: string;
  keyTechniques: string;
  primaryGoal: string;
} 